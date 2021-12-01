export type staticProps = {
    params: {
        id: string
    }
  }
  
  export type postProps = {
    postData: { 
        id: string, 
        index: number,
        title: string,
        contentHtml: string
    }
  }

  export type Post = {
    id: string,
    index: number,
    title: string
  }