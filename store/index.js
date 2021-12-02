import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex) 

const store = () => new Vuex.Store({
  state: {
    mediaURL: 'https://jqtm.uz',
    archives: [],
    compititions: [],
    projects: [],
    trainers: [],
    posts: [],
    news: [],
    releases: [],
    searchs: ''
  },
  getters: {
    getArchive(state) {
      return state.archives;
    },
    getCompitition(state) {
      return state.compititions;
    },
    getProject(state) {
      return state.projects;
    },
    getTrainer(state) {
      return state.trainers;
    },
    getPosts(state) {
      return state.posts;
    },
    getNews(state) {
      return state.news;
    },
    getRelease(state) {
      return state.releases
    },
    getInput(state) {
      return state.searchs
    }
  },
  mutations: {
    setArchive(state, archive) {
      state.archives = archive
    },
    setCompitition(state, compitition) {
      state.compititions = compitition
    },
    setProject(state, project) {
      state.projects = project
    },
    setTrainer(state, trainer) {
      state.trainers = trainer
    },
    setPosts(state, post) {
      state.posts = post
    },
    setNews(state, newPost) {
      state.news = newPost
    },
    setReleases(state, release) {
      state.releases = release
    },
    setInput(state, search) {
      state.searchs = search
    }

  },
  actions: {
    async getArchive({commit}) {
      await this.$axios.get('arxiv/')
        .then((res) => {
          commit('setArchive', res.data)
        })
        .catch(() => {})
    },
    async getCompitition({commit}) {
      await this.$axios.get('tanlovlar/')
        .then((res) => {
          commit('setCompitition', res.data);
        })
        .catch(() => {})
    },
    // `'tanlovlar/?lang=' + ${this.$i18n.locale}`
    async getProject({commit}) {
      await this.$axios.get('loyihalar/')
        .then((res) => {
          commit('setProject', res.data);
        })
        .catch(() => {})
    },
    async getTrainer({commit}) {
      await this.$axios.get('trenerlar/trenerlar/')
        .then((res) => {
          commit('setTrainer', res.data);
        })
        .catch(() => {})
    },
    async getPosts({commit}) {
      await this.$axios.get('elonlar/')
        .then((res) => {
          commit('setPosts', res.data);
        })
        .catch(() => {})
    },
    async getNews({commit}) {
      await this.$axios.get('yangiliklar/')
        .then((res) => {
          commit('setNews', res.data);
          console.log('news ', news)
        })
        .catch(() => {})
    },
    async getReleases({commit}) {
      await this.$axios.get('treninglar/matbuot/')
        .then((res) => {
          commit('setReleases', res.data)
          // console.log('setReleases', res)
        })
        .catch(() => {})
    },
    async getInput({commit}, data) {
      await this.$axios.get(`search/?search=${data}&&lang=${this.$i18n.locale}`)
        .then((res) => {
          commit('setInput', res.data)
          console.log('SEARCH', res)
        })
    },       
  }
});

export default store