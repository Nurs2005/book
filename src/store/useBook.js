import create from 'zustand';

const loadWishlistFromLocalStorage = () => {
  try {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    return wishlist;
  } catch (error) {
    console.error('Error loading wishlist from localStorage:', error);
    return [];
  }
};

export const useBook = create((set) => ({
  wishlist: loadWishlistFromLocalStorage(),
  addBookToWishlist: (book) =>
    set((state) => {
      const updatedWishlist = [...state.wishlist, book];
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); 
      return { wishlist: updatedWishlist };
    }),
    deleteBook: (id) =>
    set((state) => {
      const updatedWishlist = state.wishlist.filter((book) => book.id !== id);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); 
      return { wishlist: updatedWishlist };
    }),
}));
