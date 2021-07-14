import { useEffect, useMemo, useState } from "react";
import type {
	IPurchase,
	IPurchaseSeller,
	ITreatedPurchase,
} from "../../@types";
import { useUser } from "../../Providers/user";
import { useWindow } from "../../Providers/window";
import { errorToast, WINDOW_SIZE_DESKTOP } from "../../utils";
import MyPurchasesHistoryMobile from "./mobile";
import MyPurchasesHistoryDesktop from "./desktop";
import Loading from "../../Components/Loading";
import { Redirect } from "react-router-dom";

const MyPurchasesHistory = (): JSX.Element => {
	const [purchasesList, setPurchasesList] = useState<IPurchase[]>([]);
	const [treatedPurchasesList, setTreatedPurchasesList] = useState<
		ITreatedPurchase[]
	>([]);
	const [isLoading, setIsLoading] = useState(true);
	const { user, initController } = useUser();
	const { pageWidth } = useWindow();
	const controller = initController();

	useEffect(() => {
		if (user && user.auth) {
			controller
				.getPurchasesOfUser(user.personalData.id)
				.then((response: IPurchase[]) => {
					hasUniqueSeller(response);
					setPurchasesList(response);
				})
				.catch(() =>
					errorToast(
						`${user.personalData.name}, houve um erro ao tentar buscar suas compras.`,
					),
				);
		}
		// eslint-disable-next-line
	}, []);

	const treatPurchasesList = useMemo(async (): Promise<ITreatedPurchase[]> => {
		if (user && user.auth && !!purchasesList.length) {
			const result: ITreatedPurchase[] = [];
			const { sellerId } = purchasesList[0];
			const seller = await controller.getUser(sellerId);
			const sellerInfo: IPurchaseSeller = {
				name: seller.name,
				email: seller.email,
				phone: seller.phone,
			};

			for (let i = 0; i < purchasesList.length; i++) {
				const treatedPurchase: ITreatedPurchase = {} as ITreatedPurchase;
				treatedPurchase.purchase = purchasesList[i];
				treatedPurchase.seller = sellerInfo;

				result.push(treatedPurchase);
			}

			return result;
		}
		return [];
		// eslint-disable-next-line
	}, [purchasesList]);

	useEffect(() => {
		if (user && user.auth && !!purchasesList.length) {
			const getTreatedPurchasesList = async () => {
				const treatedPurchasesList = await treatPurchasesList;
				setTreatedPurchasesList(treatedPurchasesList);
				setIsLoading(false);
			};
			getTreatedPurchasesList();
		}
	}, [treatPurchasesList]);

	if (!user) {
		return (
			<>
				<Redirect to="/" />
			</>
		);
	}
	const hasUniqueSeller = (purchasesList: IPurchase[] | undefined): void => {
		if (!!purchasesList && purchasesList.length) {
			const sellerId = purchasesList[0].sellerId;

			purchasesList.forEach(purchase => {
				if (purchase.sellerId !== sellerId) {
					throw new Error("Has more thar one seller into this purchase.");
				}
			});
		}
	};

	return (
		<>
			{isLoading ? (
				<Loading size={50} />
			) : !!treatedPurchasesList.length && pageWidth < WINDOW_SIZE_DESKTOP ? (
				<MyPurchasesHistoryMobile treatedPurchasesList={treatedPurchasesList} />
			) : (
				<MyPurchasesHistoryDesktop
					treatedPurchasesList={treatedPurchasesList}
				/>
			)}
		</>
	);
};

export default MyPurchasesHistory;
