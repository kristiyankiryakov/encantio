import ListFaqs from "./ListFaqs";

const Index = () => {
    return (
        <div className="bg-gray-100 pb-20">
            <h1 className="xs:text-3xl sm:text-4xl text-center text-[#090A18] font-bold py-16">Често задавани въпроси</h1>
            <ListFaqs />
        </div>
    )
}

export default Index