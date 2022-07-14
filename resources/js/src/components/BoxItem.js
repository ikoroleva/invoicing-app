
const BoxItem = ({ className, name, type, color }) => {

    return (
        <div>
            <img src={`./images/${name}.svg`} alt="icon" />
        </div>
    );
}

export default BoxItem;