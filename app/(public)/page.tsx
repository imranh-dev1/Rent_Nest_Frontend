import { getCurrentUser } from "@/services/auth.service";
import { getProperties } from "./_actions/property/getProperties";
import Banner from "./_components/home/Banner"
import FeaturedProperties from "./_components/home/FeaturedProperties";
import PropertyCategories from "./_components/home/PropertyCategories";
import Testimonials from "./_components/home/Testimonials";
import WhyChooseRentNest from "./_components/home/WhyChooseRentNest";

export default async function Page() {

  const { data: properties } = await getProperties({
    limit: 3,
    sortBy: "createdAt",
    sortOrder: "desc",
  });
  const user = await getCurrentUser();

  return (
    <>
      <Banner user={user} />

      <FeaturedProperties properties={properties} />

      <PropertyCategories />

      <WhyChooseRentNest />

      <Testimonials />
    </>
  )
}
