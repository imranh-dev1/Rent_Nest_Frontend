import { PropertySearchParams } from "@/types/property";
import { getProperties } from "./_actions/property/getProperties";
import Banner from "./_components/home/Banner"
import FeaturedProperties from "./_components/home/FeaturedProperties";
import PropertyCategories from "./_components/home/PropertyCategories";
import Testimonials from "./_components/home/Testimonials";
import WhyChooseRentNest from "./_components/home/WhyChooseRentNest";

export default async function Page() {

  const { data: properties } = await getProperties({
    page: 1,
    limit: 6,
    availability: "AVAILABLE",
    sortBy: "createdAt",
    sortOrder: "desc",
  });

  return (
    <>
      <Banner />

      <FeaturedProperties properties={properties} />

      <PropertyCategories />

      <WhyChooseRentNest />

      <Testimonials />
    </>
  )
}
