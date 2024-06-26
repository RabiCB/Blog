export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title of blog article'
      },{
        name:'slug',
        type:'slug',
        title:'Slug of your blog article',
        options:{
            source:'title'
        }
      },
      {
        name:'keywords',
        type:'text',
        title:'keywords for seo'
      },
      {
        name:'smallcontent',
        type:'text',
        title:'short content for home page'
      },
      {
        name:'titleImage',
        type:"image",
        title:"Title Image"
      },{
        name:'smalldescription',
        type:'text',
        title:'Small Description'
      },{
        name:'content',
        type:'array',
        title:'Content',
        of:[{
            type:'block',

        }]
      }
    ]
  }