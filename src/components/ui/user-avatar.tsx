import React from "react";

interface UserAvatarProps {
  userName?: string | null;
  userImage?: string | null;
  className?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * UserAvatar component displays either the user's image or their initials in a colored circle
 */
export const UserAvatar: React.FC<UserAvatarProps> = ({
  userName,
  userImage,
  className = "",
  size = "md",
}) => {
  // Get initials from user name
  const getInitials = (name?: string | null): string => {
    if (!name) return "?";

    const names = name.trim().split(/\s+/);

    if (names.length === 0) return "?";
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase();
    }

    return `${names[0].charAt(0)}${names[names.length - 1].charAt(
      0
    )}`.toUpperCase();
  };

  // Generate a consistent background color based on the username
  const getColorFromName = (name?: string | null): string => {
    if (!name) return "#25A7B0"; // Default color

    const colors = [
      "#25A7B0", // Teal
      "#466FF7", // Blue
      "#E2BF4B", // Gold
      "#F97066", // Red
      "#8A63D2", // Purple
      "#4CAF50", // Green
      "#FF9800", // Orange
    ];

    // Simple hash function to get consistent color for the same name
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    return colors[Math.abs(hash) % colors.length];
  };

  // Size classes
  const sizeClasses = {
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-16 h-16 text-xl",
  };

  return (
    <>
      {userImage ? (
        // If user has an image, show the image
        <img
          src={userImage}
          alt={userName || "User"}
          className={`rounded-full border border-white object-cover object-center ${sizeClasses[size]} ${className}`}
        />
      ) : (
        // Otherwise show the avatar with initials
        <div
          className={`rounded-full flex items-center justify-center text-white font-medium ${sizeClasses[size]} ${className}`}
          style={{ backgroundColor: getColorFromName(userName) }}
          aria-label={userName || "User avatar"}
        >
          {getInitials(userName)}
        </div>
      )}
    </>
  );
};
