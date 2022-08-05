import datas from "../Data";

export const allDatas = async () => {
    if (datas) {
        try {
            const reponse = await fetch("../Data/index.js");
            const getDatas = await reponse.json();
            return getDatas;
        } catch (error) {
            throw new Error({ message: error });
        }
    }
};
