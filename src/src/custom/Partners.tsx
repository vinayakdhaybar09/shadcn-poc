const Partners = () => {
  return (
    <div className="px-20 py-10 w-full bg-[#f6f3ee]  flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-20">Our Partners</h2>
      <div className="flex justify-center gap-10">
        <div className="w-[200px] h-[200px]">
          <img
            className="object-cover"
            src="https://www.designevo.com/res/templates/thumb_small/simple-flipped-p-and-k-monogram.webp"
            alt=""
          />
        </div>
        <div className="w-[200px] h-[200px]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRm7GJJhM6Zhtv8PXXq4oAvCd-hJVFbbEcfg&usqp=CAU"
            alt=""
          />
        </div>

        <div className="w-[200px] h-[200px]">
          <img
            className="w-auto h-auto object-cover"
            src="https://images-platform.99static.com//SWMmyxjHavEDXSBUEb9HRBDyd-U=/417x0:1584x1167/fit-in/500x500/99designs-contests-attachments/67/67146/attachment_67146683"
            alt=""
          />
        </div>

        <div className="w-[200px]">
          <img
            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/09/attachment_69358233-e1567625444355.jpg?auto=format&q=60&fit=max&w=930"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
