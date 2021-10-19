export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '616f12921f714d606195d505',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-gbkpm61s',
                  apiId: '11767b4b-3b97-4c94-b551-6adeb630ec1a'
                },
                {
                  buildHookId: '616f129399e76b655caf25f4',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-doqxy8v1',
                  apiId: 'db37f1a2-22da-4a2c-b04c-b396306dadbe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cyruslk/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-doqxy8v1.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
