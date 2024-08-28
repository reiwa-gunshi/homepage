export interface memberType {
  memberData: {
    fields: {
      managerialPosition: string;
      name: string;
      member_name: string;
      speechBubbles: string;
      topOneword: string;
      slug: string;
      thumbHover: {
        fields: {
          file: {
            url: string;
          };
        };
      };
      topthumbImg: {
        fields: {
          file: {
            url: string;
          };
        };
      };

      thumbImg: {
        fields: {
          file: {
            url?: string;
          };
        };
      };

      memberImg: {
        fields: {
          file: {
            url: string;
          };
        };
      };
    };
  }[];
}

export interface blogData {
  blogData: {
    fields: {
      blogThumbTtl: string;
      blogTtl: string;
      blogImg: {
        fields: {
          file: {
            url: string;
          };
        };
      };
      slug: string;
      categoryTag: {
        fields: {
          slug?: string;
          tagName?: string;
        };
        slug?: string;
      }[];
    };
  }[];
}

export interface blogTag {
  blogTag: {
    fields: {
      tagName?: string;
    };
  }[];
}

export interface workData {
  workData: {
    fields: {
      workTtl: string;
      workSubTtl: string;
      workThumb: {
        fields: {
          file: {
            url: string;
          };
        };
      };
      workCont?: string;
      worsTag: {
        fields: {
          worksTagSlug?: string;
          worksTagName?: string;
        };
      }[];
    };
  }[];
}

export interface workData_type {
  fields: {
    workTtl: string;
    workSubTtl: string;
    workThumb: {
      fields: {
        title?: string;
        file: {
          url: string;
        };
      };
    };
    workCont?: string;
    worsTag: {
      fields: {
        worksTagSlug?: string;
        worksTagName?: string;
      };
    }[];
  };
}

export interface workTag {
  workTag: {
    fields: {
      worksTagSlug?: string;
      worksTagName?: string;
    };
  }[];
}



export interface LinkProps {
  customLink?: string;
}

export interface newsData {
  newsData: {
    fields: {
      newTtl: string;
      slug: string;
      tumbTxt: string;
      newsData: string;
      newsCont: string;
    };
  }[];
}

export interface nav_type {
  name: string;
  path: string;
  yomikana: string;
}
[];

export interface volunteer_type {
  ttl: string;
  img_path: string;
  img_width: number;
  img_height: number;
  detail: string;
}
[];
