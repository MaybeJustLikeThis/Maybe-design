import { renderHook, act } from "@testing-library/react-hooks";
import useStore, { getId, getMessagePosition, findMessage } from "./useStore";
import { MessageProps } from ".";

describe("useStore", () => {
  it("should add a message", () => {
    const { result } = renderHook(() => useStore("top"));

    const message: MessageProps = { content: "Test message" };

    act(() => {
      result.current.add(message);
    });

    expect(result.current.messageList.top).toHaveLength(1);
    expect(result.current.messageList.top[0].content).toBe("Test message");
  });

  it("should update a message", () => {
    const { result } = renderHook(() => useStore("top"));

    const message: MessageProps = { content: "Test message" };

    let id: number;
    act(() => {
      id = result.current.add(message);
    });

    const updatedMessage: MessageProps = { content: "Updated message" };

    act(() => {
      result.current.update(id, updatedMessage);
    });

    expect(result.current.messageList.top[0].content).toBe("Updated message");
  });

  it("should remove a message", () => {
    const { result } = renderHook(() => useStore("top"));

    const message: MessageProps = { content: "Test message" };

    let id: number;
    act(() => {
      id = result.current.add(message);
    });

    act(() => {
      result.current.remove(id);
    });

    expect(result.current.messageList.top).toHaveLength(0);
  });

  it("should clear all messages", () => {
    const { result } = renderHook(() => useStore("top"));

    const message1: MessageProps = { content: "Test message 1" };
    const message2: MessageProps = { content: "Test message 2" };

    act(() => {
      result.current.add(message1);
      result.current.add(message2);
    });

    act(() => {
      result.current.clearAll();
    });

    expect(result.current.messageList.top).toHaveLength(0);
    expect(result.current.messageList.bottom).toHaveLength(0);
  });
});

describe("Utility functions", () => {
  it("should generate a unique id", () => {
    const message: MessageProps = { content: "Test message" };
    const id1 = getId(message);
    const id2 = getId(message);

    expect(id1).not.toBe(id2);
  });

  it("should get message position", () => {
    const messageList = {
      top: [{ id: 1, content: "Test message" }],
      bottom: [],
    };

    const position = getMessagePosition(messageList, 1);
    expect(position).toBe("top");
  });

  it("should find message", () => {
    const messageList = {
      top: [{ id: 1, content: "Test message" }],
      bottom: [],
    };

    const { position, index } = findMessage(messageList, 1);
    expect(position).toBe("top");
    expect(index).toBe(0);
  });
});
