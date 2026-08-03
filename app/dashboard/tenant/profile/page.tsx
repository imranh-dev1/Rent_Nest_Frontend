import { getCurrentUser } from "@/services/auth.service";
import ProfileForm from "../../_components/profile/ProfileForm";
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