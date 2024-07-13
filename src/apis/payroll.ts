import axiosInstance from "@/app/utils/apis";

export type OrgUser = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  avatar: string | null;
};

export async function getOrgPayrolls(orgId: number): Promise<OrgUser[]> {
  const response = await axiosInstance.get(`/payroll/org/${orgId}`);

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
