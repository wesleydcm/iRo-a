import { Wrapper } from "../styles";
import { IProduct, IPurchase, IPurchaseSeller } from "../../../@types";
import ProductCardInCartHistoryMobile from "../../ProductCardInCartHistory/mobile";
import { ReactComponent as CheckSvg } from "../../../assets/images-mobile/check.svg";
import { priceFormatter } from "../../../utils";
import { memo } from "react";

interface Props {
	seller: IPurchaseSeller;
	purchase: IPurchase;
	"data-testid"?: string;
}
/**
 * It's the product that must be used into histories.
 * == DESKTOP VERSION ==
 * @prop  {IProduct} seller - The seller that must be rendered.
 * @prop  {IPurchase} purchase - The purchase that must be rendered.
 * @prop {string} "data-testid?" - Only to jest tests proposal.
 */
const HistoryCard = ({ seller, purchase, ...rest }: Props): JSX.Element => {
	return (
		<Wrapper isReceived={purchase.isReceived} {...rest}>
			<div data-css="seller__data">
				<span data-css="date">{purchase.date}</span>
				<h3>Vendedor</h3>
				<div>
					<span>Nome:</span>
					<span>{seller.name}</span>
				</div>
				<div>
					<span>Telefone:</span>
					<span>{seller.phone}</span>
				</div>
				<div>
					<span>E-mail:</span>
					<span>{seller.email}</span>
				</div>
				<h2>Itens</h2>
			</div>
			<div data-css="purchase__data">
				<span>Total: {priceFormatter(purchase.total)}</span>
				<div>
					<span>Subtotal: </span>
					<span>{priceFormatter(purchase.subtotal)}</span>
				</div>
				<div>
					<span>Frete: </span>
					<span>{priceFormatter(purchase.delivery)}</span>
				</div>
			</div>
			<ul>
				{purchase.products.map((item: IProduct) => (
					<li key={item.id}>
						<ProductCardInCartHistoryMobile scenery="history" item={item} />
					</li>
				))}
			</ul>
			<div data-css="isReceivedWrapper">
				<span>Recebido?</span>
				<CheckSvg />
			</div>
		</Wrapper>
	);
};

export default memo(HistoryCard);
