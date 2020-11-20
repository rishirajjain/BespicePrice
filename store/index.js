export const state = () => ({
  spiceData: {},
  spiceDataIndi: {},
});
export const mutations = {
  SET_DATA_SPICE: (state, data) => {
    state.spiceData = data;
  },
  SET_DATA_S_INDI: (state, data) => {
    state.spiceDataIndi = data;
  }
};

export const actions = {
  loadSpiceData({ commit }) {
    return this.$storyapi
      .get("cdn/stories", {
        version: process.env.NODE_ENV == "production" ? "published" : "draft",
        starts_with: "spices/"
      })
      .then(res => {

        commit(
          "SET_DATA_SPICE",
          res.data.stories.map(wp => {
            return {
              id: wp.slug,
              name: wp.content.Name,
              specification: wp.content.Specification,
              SellerData: wp.content.SellerData.tbody
            };
          })
        );
      });
  },
  loadSpiceIndi({ commit }, params) {

    return this.$storyapi
      .get("cdn/stories" + params, {
        version: process.env.NODE_ENV == "production" ? "published" : "draft"
      })
      .then(res => {
        commit("SET_DATA_S_INDI", {
          name: res.data.story.content.Name,
          specification: res.data.story.content.Specification,
          SellerData: res.data.story.content.SellerData.tbody,
          date: res.data.story.content.date
        });
      });
  }
}
