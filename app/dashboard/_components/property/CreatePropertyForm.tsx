"use client";

import PropertyForm from "./PropertyForm";


export default function CreatePropertyForm(
    {
        categories,
        onSubmitAction
    }: any
) {


    return (

        <PropertyForm

            mode="create"

            categories={categories}

            onSubmitAction={
                onSubmitAction
            }

        />

    );


}