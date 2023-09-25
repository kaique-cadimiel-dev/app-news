import { useContext } from "react";
import { NewsContext } from "../../context/news-context";

function Topics() {
    const { topics } = useContext(NewsContext);
    const acc = [] as string[]
    const save = (topic: string, checked: boolean) => {
        if (checked) {
            acc.push(topic)
        } if (checked === false) {
            acc.splice(acc.indexOf(topic), 1)
        }
        localStorage.setItem('topics', JSON.stringify(acc))
    };
    return (
        <>

            <h4>Choose your Topics</h4>
            {
                topics.map((topic, i) => {
                    return (
                        <label htmlFor={`${topic}${i}`} key={`${topic}${i}`}>
                            <input
                                id={`${topic}${i}`}
                                type="checkbox"
                                name="topics"
                                value={`${topic}`}
                                onChange={({ target }) => {
                                    save(topic, target.checked);
                                }}
                            />
                            {topic}
                        </label>
                    )
                })
            }
            <a href="/profileadd">Next</a>
        </>
    )
}

export default Topics;