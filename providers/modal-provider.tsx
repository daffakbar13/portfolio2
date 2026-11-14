"use client";

import { useSyncExternalStore } from "react";

import { CustomModal } from "@/components/modals/custom-modal";

const subscribe = () => () => {};

export const ModalProvider = () => {
  const isMounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CustomModal />
    </>
  );
};
