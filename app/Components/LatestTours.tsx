import Card from "./ui/Card";

interface Tour {
  image: string;
  heading: string;
  description: string;
  link: string;
}

const data: { [key: string]: Tour } = {
  tour1: {
    image:
      "https://res.cloudinary.com/dbtqrbhh6/image/upload/v1716979111/WhatsApp_Image_2024-05-29_at_3.11.26_PM_1_ho0ccv.jpg",
    heading: "Gulmit Gojal Hunza",
    description:
      "10 days trip to hunza, Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quas, ad fugiat ",
    link: "",
  },
  tour2: {
    image:
      "https://res.cloudinary.com/dbtqrbhh6/image/upload/v1716979111/WhatsApp_Image_2024-05-29_at_3.11.26_PM_1_ho0ccv.jpg",
    heading: "Gulmit Gojal Hunza",
    description:
      "10 days trip to hunza, Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quas, ad fugiat ",
    link: "",
  },
  tour3: {
    image:
      "https://res.cloudinary.com/dbtqrbhh6/image/upload/v1716979111/WhatsApp_Image_2024-05-29_at_3.11.26_PM_1_ho0ccv.jpg",
    heading: "Gulmit Gojal Hunza",
    description:
      "10 days trip to hunza, Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quas, ad fugiat ",
    link: "",
  },
  tour4: {
    image:
      "https://res.cloudinary.com/dbtqrbhh6/image/upload/v1716979111/WhatsApp_Image_2024-05-29_at_3.11.26_PM_1_ho0ccv.jpg",
    heading: "Gulmit Gojal Hunza",
    description:
      "10 days trip to hunza, Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quas, ad fugiat ",
    link: "",
  },
  tour5: {
    image:
      "https://res.cloudinary.com/dbtqrbhh6/image/upload/v1716979111/WhatsApp_Image_2024-05-29_at_3.11.26_PM_1_ho0ccv.jpg",
    heading: "Gulmit Gojal Hunza",
    description:
      "10 days trip to hunza, Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quas, ad fugiat ",
    link: "",
  },
};

const LatestTours = () => {
  const renderCards = () => {
    return Object.values(data).map((tour, index) => (
      <Card
        key={index}
        image={tour.image}
        heading={tour.heading}
        description={tour.description}
        link={tour.link}
      />
    ));
  };

  return (
    <div className="bg-white flex flex-col p-8 z-10 overflow-hidden">
      <h1 className="px-4  text-5xl font-sans  text-gray-900 font-bold py-6">
        Explore Our Latest Tours
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4 justify-items-center gap-4 p-4">
        {renderCards()}
      </div>
    </div>
  );
};

export default LatestTours;
