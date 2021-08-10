interface ITest {
    text: string;
}

const Test: React.FunctionComponent<ITest> = ({ text }) => {
    return <div>{text}</div>
}

export default Test;