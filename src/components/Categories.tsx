import ButtonCategory from "./ButtonCategory"

export default function Categories() {
    return (
        <div className="flex mx-auto items-center gap-x-4">
            <ButtonCategory title={"Electricas"} />
            <ButtonCategory title={"Manuales"} />
            <ButtonCategory title={"Accessorios"} />
        </div>
    )
}