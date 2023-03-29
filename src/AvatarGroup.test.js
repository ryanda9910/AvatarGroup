import { render } from "@testing-library/react";
import AvatarGroup from "./AvatarGroup";
import React from "react";

describe("Avatar Group component", () => {
  test("default component should render properly", () => {
    const output = render(<AvatarGroup />);
    expect(output).toMatchSnapshot();
  });

  it("should display a custom maximum number of avatars", () => {
   
    const maxAvatars = 4;

    const { container } = render(
      <AvatarGroup  maxLength={maxAvatars} />
    );
    const avatarList = container.querySelector(".avatar-list");

    expect(avatarList.children.length - 1).toBe(maxAvatars);// Check if the avatar list has a maximum based on maxAvatars
  });

  it("should render expectation size avatars", () => {
    const expectSize = ["xs", "sm", "md", "lg"];
    let size;
    const { container } = render(<AvatarGroup size="xs" />);
    const avatarElements = container.querySelectorAll(".avatar");
    size = avatarElements[0].className.split(' ')[1]
    expect(expectSize.includes(size)).toBeTruthy() //if outside the expectSize will be false
  });
});
