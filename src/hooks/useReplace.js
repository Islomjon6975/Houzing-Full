export const useReplace = (name, value) => {
    let url = new URL(window?.location?.href);
    url.searchParams.set(name, value);

    if(!value){
        url.searchParams.delete(name);
    }

    return url.search;
};

export default useReplace;

// URL -> set, get, delete