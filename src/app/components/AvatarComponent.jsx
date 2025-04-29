import React from "react";
import { Avatar, Tooltip } from "antd";

const users = [
  { id: 1, name: "Ali Can", imageUrl: "/user1.jpg" },
  { id: 2, name: "Ayşe Yılmaz", imageUrl: "/user.jpg" },
  { id: 3, name: "Mehmet Demir", imageUrl: "" },
  { id: 4, name: "Fatma Kaya", imageUrl: "/kedi.jpg" },
  { id: 5, name: "Ahmet Yıldız", imageUrl: "/int.png" },
];

// Renk Üretici Fonksiyon
function getColorById(id) {
  const customColors = ["#6895D2", "#A4CE95", "#D04848", "#F3B95F", "#FDE767"];
  return customColors[id % customColors.length];
}

const AvatarGroupComponent = () => {
  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Avatar.Group
        max={{
          count: 4,
          style: { color: "#0d47a1", backgroundColor: "#bbdefb" },
        }}
      >
        {users.map((member) => (
          <Tooltip key={member.id} title={member.name} placement="top">
            {member.imageUrl ? (
              <Avatar src={member.imageUrl}>
                {!member.imageUrl && member.name.charAt(0).toUpperCase()}
              </Avatar>
            ) : (
              <Avatar
                style={{
                  backgroundColor: getColorById(member.id),
                }}
              >
                {member.name.charAt(0).toUpperCase()}
              </Avatar>
            )}
          </Tooltip>
        ))}
      </Avatar.Group>
    </div>
  );
};

export default AvatarGroupComponent;
