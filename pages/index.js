import React, { useEffect } from 'react';

import { Fonts } from "./styles/fonts";
import {Layout} from "../components/Layout";

export default function Index() {
  useEffect(() => {
    Fonts();
  });
    return (
      <Layout>
          <p>Last Post</p>
      </Layout>
    );
}