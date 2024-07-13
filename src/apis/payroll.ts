import axiosInstance from "@/app/utils/apis";

export type OrgUser = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  avatar: string | null;
};

export async function getOrgPayrolls(): Promise<OrgUser[]> {
  const response = await axiosInstance.get(
    `${process.env.NEXT_PUBLIC_SERVER}/payroll/org/list`,
  );
  console.log("response", response.data);

  const orgUsers = response.data as {
    createdAt: string;
    user: {
      id: number;
      email: string;
      Profile: {
        name: string;
        avatar: string | null;
      };
    };
  }[];

  return orgUsers.map((item) => ({
    id: item.user.id,
    name: item.user.Profile.name,
    email: item.user.email,
    createdAt: item.createdAt,
    avatar: item.user.Profile.avatar,
  }));
}
