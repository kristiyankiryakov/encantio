import api from "../../api"

export const deleteReview = async (id: number) => {
    await api(`/reviews/${id}`, { method: 'DELETE' });
}

export const approveReview = async (id: number, state: boolean) => {
    await api(`/reviews/approve/${id}`, { data: { 'isApproved': state }, method: 'PUT' });

}