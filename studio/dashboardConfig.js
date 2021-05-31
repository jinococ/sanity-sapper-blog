export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60b513f634bb147a15b55f90',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-b6gqs331',
                  apiId: '1130b243-236e-4507-a633-8c8069a1c43b'
                },
                {
                  buildHookId: '60b513f73d5cbab547cf01fa',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-f1iz35wc',
                  apiId: '292d9074-c50d-4787-a362-13ab6a64d0ba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jinococ/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-f1iz35wc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
