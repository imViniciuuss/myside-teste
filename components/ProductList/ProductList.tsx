"use client";

import { useState, useMemo } from "react";
import { Product } from "@/types";
import SearchBar from "@/components/SearchBar/SearchBar";
import ProductCard from "@/components/ProductCard/ProductCard";
import SortDropdown from "@/components/SortDropdown/SortDropdown";
import Pagination from "@/components/Pagination/Pagination";
import {
  ListContainer,
  HeaderRow,
  TitleGroup,
  PageTitle,
  PageSubtitle,
  ToolbarGroup,
  ResultCount,
  Grid,
  EmptyMessage,
} from "./styles";

interface ProductListProps {
  products: Product[];
  categories: string[];
}

const ITEMS_PER_PAGE = 12;

function buildCategoryOptions(categories: string[]) {
  return [
    { value: "all", label: "All Categories" },
    ...categories.map((cat) => ({
      value: cat,
      label: cat.charAt(0).toUpperCase() + cat.slice(1),
    })),
  ];
}

export default function ProductList({ products, categories }: ProductListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const categoryOptions = useMemo(
    () => buildCategoryOptions(categories),
    [categories]
  );

  const filteredProducts = useMemo(() => {
    let result = products;

    if (selectedCategory !== "all") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchTerm.trim()) {
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter(
        (product) =>
          product.title.toLowerCase().includes(lowerSearch) ||
          product.description.toLowerCase().includes(lowerSearch)
      );
    }

    return result;
  }, [products, searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  function handleSearchChange(value: string) {
    setSearchTerm(value);
    setCurrentPage(1);
  }

  function handleCategoryChange(value: string) {
    setSelectedCategory(value);
    setCurrentPage(1);
  }

  return (
    <ListContainer>
      <HeaderRow>
        <TitleGroup>
          <PageTitle>Product Catalog</PageTitle>
          <PageSubtitle>
            Discover our curated collection of quality products
          </PageSubtitle>
        </TitleGroup>
        <ToolbarGroup>
          <SearchBar value={searchTerm} onChange={handleSearchChange} />
          <SortDropdown
            options={categoryOptions}
            selected={selectedCategory}
            onChange={handleCategoryChange}
          />
        </ToolbarGroup>
      </HeaderRow>

      <ResultCount>
        Showing {paginatedProducts.length} of {filteredProducts.length} products
      </ResultCount>

      <Grid>
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <EmptyMessage>
            No products found for &quot;{searchTerm}&quot;
          </EmptyMessage>
        )}
      </Grid>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </ListContainer>
  );
}
