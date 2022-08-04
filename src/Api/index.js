import { useEffect /*, useState*/ } from "react";

const url =
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json";

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    // mode: "no-cors",
};

const method = "GET";

export const Datas = () => {
    // const [data, setData] = useState({});

    useEffect(() => {
        fetch(url, { headers, method })
            .then((resp) => {
                resp.json();
            })

            .then((respData) => {
                console.log(respData);
            })
            .catch((err) => console.log(err));
    }, []);
};
