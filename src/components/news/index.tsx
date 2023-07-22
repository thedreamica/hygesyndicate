import Up from "@/icons/up"

const Item = ({img, heading, content}: any) => {
    return <div>
        <div>
            <img src={img} />
            <div>
                <p>{heading}</p>
                <Up/>
            </div>
            <p>{content}</p>
        </div>
    </div>
}
const News = () => {
    return <div>
        <Item heading="Latest news" />
        <Item heading="Blog" />
        <Item heading="Sustainability" />
    </div>
}

export default News