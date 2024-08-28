// contexts/MyContext.tsx
import { createContext, useContext, useState } from "react";
import { workData_type } from "../lib/type";
import { useRouter } from "next/router";

type MyContextType = {
  listPosts: workData_type[];
  setListPosts: React.Dispatch<React.SetStateAction<workData_type[]>>;
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  AllPosts: workData_type[];
  setAllPosts: React.Dispatch<React.SetStateAction<workData_type[]>>;
  isAllTag: boolean;
  setIsAllTag: React.Dispatch<React.SetStateAction<boolean>>;
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
};

const MyContext = createContext<MyContextType | null>(null);

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

export const MyProvider = ({ children }: { children: React.ReactNode }) => {
  const [listPosts, setListPosts] = useState<workData_type[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [AllPosts, setAllPosts] = useState<workData_type[]>([]);
  const [isAllTag, setIsAllTag] = useState<boolean>(true);

  const router = useRouter();
  const path_tag: string[] = [];
  if (typeof router.query.tag === "string") {
    path_tag.push(router.query.tag);
  }
  const [tags, setTags] = useState<string[]>(path_tag);

  return (
    <MyContext.Provider
      value={{
        listPosts,
        setListPosts,
        pageNumber,
        setPageNumber,
        AllPosts,
        setAllPosts,
        isAllTag,
        setIsAllTag,
        tags,
        setTags,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
