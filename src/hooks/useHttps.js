const {REACT_APP_BASE_URL} = process.env

export const useHttp = () => {
    const request = async ({
        url = '',
        method = 'GET',
        body = null,
        headers = {},
        token = false,
    }) => {
        if(token){
            headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        }

        let res = await fetch(`${REACT_APP_BASE_URL}${url}`, {
            method,
            body,
            headers,
        }).then((res) => res.json())

        if(res?.success) {
            return res
        }else{
            throw new Error(res?.message || 'Something Wrong')
        }
    }

  return {request}
}
