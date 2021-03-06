import React, { FC } from 'react';
import ThemeContext from '../../ThemeContext';

export interface IBlogCard {
  data: any;
  slugs: string[];
}
const BlogCard: FC<IBlogCard> = (props) => {
  const { data, slugs } = props;
  const { isNepali } = React.useContext(ThemeContext);

  return (
    <>
      <div className="w-full group rounded-[10px] md:w-1/2  shadow-lg lg:w-[32%] flex-col  pt-5 hover:h-full transform transition duration-500 hover:scale-105 ">
        <a href={`/blogs/${slugs[0]}`}>
          <img src={data.coverpicture.url} alt={`Hero image`} className="rounded-t-[10px] " />
          <div className="p-[20px] px-[20px]">
            <h2 className="text-lg md:text-3xl m-0 font-medium">{data.title[0].text}</h2>
            <p className="uppercase pt-1 text-xs">{data.mins_read[0].text} Mins Read</p>
            <p className="h-[95px] overflow-hidden text-gray-600 text-ellipsis mt-[10px]">
              {data.short_descriptions[0].text}
            </p>

            <button className="mt-[20px] group-hover:bg-[#14323a] px-[32px] rounded-[22px] border opacity-90 py-[12px] group-hover:text-white">
              {isNepali ? 'पढ्नुहोस्' : 'Read More'}
            </button>
          </div>
        </a>
      </div>
    </>
  );
};

export default BlogCard;
