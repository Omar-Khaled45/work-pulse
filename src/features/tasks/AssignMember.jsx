import { CircleAlert } from "lucide-react";

import { useGetWorkspaceMembers } from "@/features/workspace/useGetWorkspaceMembers";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const AssignMember = ({ field, error }) => {
	const { members } = useGetWorkspaceMembers();

	return (
		<>
			<Label htmlFor="priority">
				Assignee<span className="text-destructive">*</span>
			</Label>
			<Select value={field.value} onValueChange={field.onChange}>
				<SelectTrigger
					id="priority"
					className={Boolean(error?.message) && "border-destructive border-2"}
				>
					<SelectValue placeholder="Select a member" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{members?.map((member) => (
							<SelectItem key={member.id} value={member.user_id}>
								{member.users.first_name} {member.users.last_name}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
			{error?.message && (
				<p className="text-destructive flex items-center gap-2">
					<CircleAlert size={18} /> {error.message}
				</p>
			)}
		</>
	);
};

export default AssignMember;
