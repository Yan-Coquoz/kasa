//  const URLDatas = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json";
// const jsonDatas = "/public/datas.json";

export const fetcher = (url) => {
    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
        },
    })
        .then(async (rep) => {
            const reponse = await rep.json();
            if (reponse.length <= 0) {
                return Promise.reject({ error: "Erreur" });
            }
            return reponse;
        })

        .catch((error) => console.log(error));
};
