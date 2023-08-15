/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { DivLoading, DivLoadingEllipsis } from "./style";


export const Loading = (params: object) => {
    const bgColor: string = params["data-details"];
    return (
        <DivLoading style={{backgroundColor: bgColor == "backdrop" ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.35)"}}>
            {bgColor == "stage" && <DivLoadingEllipsis>
                <div></div>
                <div></div>
                <div></div>
            </DivLoadingEllipsis>}
        </DivLoading>)
}