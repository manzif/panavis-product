

const state = {
    images: []
};

const getters = {
    allImages : state => state.images
};

const actions = {
    async uploadImages({commit}, images) {
        console.log('\n\n\n\n\n', images)
        commit('setImages', images)
    }
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

export default {
    state,
    getters,
    actions, 
    mutations
};