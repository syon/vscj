import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Extensions from '@/components/Extensions';
import ExtensionsItem from '@/components/ExtensionsItem';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/extensions',
      name: 'Extensions',
      component: Extensions,
    },
    {
      path: '/extensions/item/:id',
      name: 'ExtensionsItem',
      component: ExtensionsItem,
    },
  ],
});
