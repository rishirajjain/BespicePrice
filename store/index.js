var md5 = require('md5');
export const state = () => ({
  spiceData: {},
  spiceDataIndi: {},
  auth: {}
});
export const mutations = {
  SET_DATA_SPICE: (state, data) => {
    state.spiceData = data;
  },
  SET_DATA_S_INDI: (state, data) => {
    state.spiceDataIndi = data;
  },
  SET_DATA_AUTH: (state, data) => {
    state.auth = data;
  }
};

export const actions = {
  loadSpiceData({ commit }) {
    return this.$storyapi
      .get("cdn/stories", {
        version: process.env.NODE_ENV == "production" ? "published" : "draft",
        starts_with: "spices/",
        sort_by: "content.Name:asc"
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
  },
  authData({ commit }, params) {
    var allowed = [
      "4a6bd68df22664cc64c78c6fa7b6b312",
      "bf2b7fc82574dc382845484d3d1cfd6d",
      "3b8326627dfed40c225e9524c401cad9",
      "ade7f13408aff903deb835d80e11c480"
    ]
    var ans = (allowed.indexOf(md5(params.email)) > -1);
    var admin = commit("SET_DATA_AUTH", {
      authorised: ans,
      email: params.email,
      img: params.image,
      name: params.name
    })

    return admin;
  }


}

