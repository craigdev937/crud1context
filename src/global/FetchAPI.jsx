import React from "react";

export const useFetch = (url, method = "GET") => {
    const [data, setData] = React.useState(null);
    const [isPending, setIsPending] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [options, setOptions] = React.useState(null);

    const postData = (postData) => {
        setOptions({
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(postData),
        });
    };

    React.useEffect(() => {
        const controller = new AbortController();
        const fetchData = async (fetchOptions) => {
            setIsPending(true);
            try {
                const res = await fetch(url, {
                    ...fetchOptions,
                    signal: controller.signal
                });
                if (!res.ok) throw new Error(res.statusText);
                const data = await res.json();
                setIsPending(false);
                setData(data);
                setError(null);
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("The Fetch was Aborted!");
                } else {
                    setIsPending(false);
                    setError("Could not fetch the data.");
                }
            }
        };
        // invoke the function
        if (method === "GET") {
            fetchData();
        };
        if (method === "POST" && options) {
            fetchData(options);
        };
        return () => {
            controller.abort();
        };
    }, [url, method, options]);
    return { error, isPending, data, postData };
};


