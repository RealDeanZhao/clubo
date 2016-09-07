import store from '../stores/TopicListStore';

export function auth() {
    fetchTopics();
};

async function fetchTopics() {
    const response = await fetch(`/api/v1/topics?page=${query.page}&recordsPerPage=${query.recordsPerPage}`, {
        credentials: 'include',
        headers: {
            'Authorization': `Bearer ${query.token}`
        }
    });
    const result = await response.json();
}
