import ProfileForm from "@/app/dashboard/_components/profile/ProfileForm";
import { getCurrentUser } from "@/services/auth.service";
import { updateProfile } from "../../_actions/profile/updateProfile";

export default async function LandlordProfilePage() {
    const user = await getCurrentUser();

    return (
        <ProfileForm
            defaultValues={user}
            onSubmitAction={updateProfile}
        />
    );
}