"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import UserActions from "./UserActions";

interface Props {
    users: any[];
}

export default function UserTable({
    users,
}: Props) {
    return (
        <div className="rounded-lg border">

            <Table>

                <TableHeader>

                    <TableRow>

                        <TableHead>Name</TableHead>

                        <TableHead>Email</TableHead>

                        <TableHead>Role</TableHead>

                        <TableHead>Status</TableHead>

                        <TableHead className="text-right">
                            Action
                        </TableHead>

                    </TableRow>

                </TableHeader>

                <TableBody>

                    {users.map((user) => (
                        <TableRow key={user.id}>

                            <TableCell>
                                {user.name}
                            </TableCell>

                            <TableCell>
                                {user.email}
                            </TableCell>

                            <TableCell>
                                {user.role}
                            </TableCell>

                            <TableCell>
                                {user.status}
                            </TableCell>

                            <TableCell className="text-right">
                                <UserActions user={user} />
                            </TableCell>

                        </TableRow>
                    ))}

                </TableBody>

            </Table>

        </div>
    );
}