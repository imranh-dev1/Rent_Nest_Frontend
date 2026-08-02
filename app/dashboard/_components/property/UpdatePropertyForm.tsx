"use client";

import PropertyForm from "./PropertyForm";

export default function UpdatePropertyForm({
    categories,
    property,
    onSubmitAction,
}: any) {
    return (
        <PropertyForm
            mode="update"
            categories={categories}
            defaultValues={property}
            onSubmitAction={(payload) =>
                onSubmitAction(property.id, payload)
            }
        />
    );
}