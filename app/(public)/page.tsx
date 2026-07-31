import { searchParamsProps } from "@/types/property";
import { getProperties } from "./_actions/property/getProperties";
import Banner from "./_components/home/Banner"
import FeaturedProperties from "./_components/home/FeaturedProperties";
import PropertyCategories from "./_components/home/PropertyCategories";
import Testimonials from "./_components/home/Testimonials";
import WhyChooseRentNest from "./_components/home/WhyChooseRentNest";

export default async function Page({ searchParams }: searchParamsProps) {
  const params = await searchParams;
  const page = Number(params.page || 1);
  const limit = Number(params.limit ?? 9);

  const searchTerm = params.searchTerm ?? "";

  const sortBy = params.sortBy ?? "createdAt";
  const sortOrder = params.sortOrder ?? "desc";

  const { data: properties, meta } = await getProperties({
    page,
    limit,
    searchTerm,
    sortBy,
    sortOrder,
  });

  console.log(meta)

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
