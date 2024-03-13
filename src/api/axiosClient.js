import axios from 'axios';

const axiosClient = axios.create({
	baseURL: 'https://api.jsonbin.io/v3/b/65f15a70dc74654018b23102',
	headers: {
		'content-type': 'application/json',
		'X-MASTER-KEY':
			'$2a$10$cuGyrN2E.2SpRIytInNNAuu8LbEXsfyNCZMgQQBRoZQKpmxjYXYfi',
		'X-ACCESS-KEY':
			'$2a$10$vYnwbKpJDh4gCdaMtm24NeQhpWBG4oPkf16KRpdTotSNjsTBokU.2',
	},
});

axiosClient.interceptors.request.use(async (config) => {
	return config;
});

axiosClient.interceptors.response.use(
	(res) => {
		if (res.headers.authorization) return res;
		else if (res && res.data) {
			return res.data;
		}
		return res;
	},
	(error) => {
		throw error;
	}
);

export default axiosClient;
