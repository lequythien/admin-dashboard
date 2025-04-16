import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import CircularProgress from "@mui/material/CircularProgress";
import Footer from "../../components/Footer";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [expandedRows, setExpandedRows] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMode, setDialogMode] = useState("add");
  const [currentPost, setCurrentPost] = useState({
    id: null,
    title: "",
    body: "",
    userId: "",
  });
  const [formErrors, setFormErrors] = useState({
    title: "",
    body: "",
    userId: "",
  });
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        setPosts(data.posts);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch posts");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0);
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  const handleToggleExpand = (postId) => {
    setExpandedRows((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const handleOpenDialog = (
    mode,
    post = { id: null, title: "", body: "", userId: "" }
  ) => {
    setDialogMode(mode);
    setCurrentPost(post);
    setFormErrors({ title: "", body: "", userId: "" });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentPost({ id: null, title: "", body: "", userId: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentPost((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const errors = {};
    if (!currentPost.title.trim()) errors.title = "Title is required";
    if (!currentPost.body.trim()) errors.body = "Body is required";
    if (!currentPost.userId || isNaN(currentPost.userId))
      errors.userId = "Valid User ID is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setActionLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async action
      if (dialogMode === "add") {
        const newPost = {
          id: posts.length + 1,
          title: currentPost.title,
          body: currentPost.body,
          userId: parseInt(currentPost.userId),
          reactions: { likes: 0 },
        };
        setPosts([newPost, ...posts]);
      } else if (dialogMode === "edit") {
        setPosts(
          posts.map((post) =>
            post.id === currentPost.id ? { ...post, ...currentPost } : post
          )
        );
      }
      handleCloseDialog();
    } catch (err) {
      setError("Failed to process action");
    } finally {
      setActionLoading(false);
    }
  };

  const handleOpenDeleteDialog = (postId) => {
    setPostIdToDelete(postId);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setPostIdToDelete(null);
  };

  const handleDelete = async () => {
    setActionLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async action
      setPosts(posts.filter((post) => post.id !== postIdToDelete));
      handleCloseDeleteDialog();
    } catch (err) {
      setError("Failed to delete post");
    } finally {
      setActionLoading(false);
    }
  };

  const paginatedPosts = posts.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    "&.MuiTableCell-head": {
      backgroundColor: "#2a3042",
      color: "#a6b0cf",
      fontWeight: "600",
      fontSize: "0.8rem",
      padding: "10px 12px",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      borderBottom: "1px solid #4B5563",
      [theme.breakpoints.down("sm")]: {
        padding: "6px 8px",
        fontSize: "0.7rem",
      },
    },
    "&.MuiTableCell-body": {
      fontSize: "0.8rem",
      padding: "8px 12px",
      color: "#a6b0cf",
      whiteSpace: "normal",
      wordBreak: "break-word",
      borderBottom: "1px solid #4B5563",
      [theme.breakpoints.down("sm")]: {
        padding: "6px 8px",
        fontSize: "0.8rem",
      },
    },
  }));

  const StyledTableRow = styled(TableRow)({
    backgroundColor: "#2a3042",
    "&:hover": {
      backgroundColor: "#374151",
    },
  });

  const StyledTablePagination = styled(TablePagination)(({ theme }) => ({
    backgroundColor: "#2a3042",
    color: "#a6b0cf",
    "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows": {
      color: "#a6b0cf",
      fontSize: "0.75rem",
    },
    "& .MuiTablePagination-select": {
      color: "#a6b0cf",
      fontSize: "0.75rem",
      "&:focus": {
        backgroundColor: "transparent",
      },
    },
    "& .MuiTablePagination-selectIcon": {
      color: "#a6b0cf",
    },
    "& .MuiTablePagination-actions button": {
      color: "#a6b0cf",
      "&:hover": {
        backgroundColor: "#374151",
      },
      "&.Mui-disabled": {
        color: "#4a5568",
      },
    },
    "& .MuiMenuItem-root": {
      color: "#a6b0cf",
      backgroundColor: "#2a3042",
      "&:hover": {
        backgroundColor: "#374151",
      },
      "&.Mui-selected": {
        backgroundColor: "#374151",
        color: "#60a5fa",
      },
    },
  }));

  const StyledButton = styled(Button)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "0.2rem",
    padding: "0.25rem 0.5rem",
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    fontSize: "0.875rem",
    fontWeight: 500,
    borderRadius: "0.25rem",
    textTransform: "none",
    transition: "background-color 200ms",
    "&:hover": {
      backgroundColor: "#2563eb",
    },
    "&:active": {
      backgroundColor: "#1d4ed8",
    },
    "@media (prefers-color-scheme: dark)": {
      backgroundColor: "#60a5fa",
      color: "#ffffff",
      "&:hover": {
        backgroundColor: "#93c5fd",
      },
      "&:active": {
        backgroundColor: "#bfdbfe",
      },
    },
    "& .MuiButton-startIcon": {
      fontSize: "1rem",
      margin: 0,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
      padding: "0.25rem 0.5rem",
      "& .MuiButton-startIcon": {
        fontSize: "0.9rem",
      },
    },
  }));

  const StyledTextField = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-root": {
      backgroundColor: "#1a202c",
      color: "#ffffff",
      borderRadius: "0.25rem",
      fontSize: "0.875rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#a6b0cf",
      fontSize: "0.875rem",
      "&.Mui-focused": {
        color: "#60a5fa",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem",
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#4a5568",
      },
      "&:hover fieldset": {
        borderColor: "#a6b0cf",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#60a5fa",
      },
    },
    "& .MuiFormHelperText-root": {
      color: "#ef4444",
      fontSize: "0.75rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.7rem",
      },
    },
  }));

  if (loading || actionLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#1a202c] bg-opacity-90 z-50">
        <div className="flex flex-col items-center gap-4">
          <CircularProgress
            sx={{ color: "#3b82f6" }}
            size={24}
            thickness={4}
            className="animate-spin"
          />
          <span className="text-white text-base font-semibold tracking-wide poppins-regular">
            {loading ? "Đang tải dữ liệu..." : "Đang xử lý..."}
          </span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-[#ef4444] text-center text-base p-4">{error}</div>
    );
  }

  return (
    <div className="text-white h-full flex flex-col">
      <div className="pt-8 sm:pt-12 px-2 flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <h1 className="text-sm sm:text-base poppins-semibold text-white">
            POSTS
          </h1>
          <div className="poppins-regular text-[#a6b0cf] text-xs whitespace-nowrap">
            <a href="#" className="mr-2 text-white hover:text-[#60a5fa]">
              Tables
            </a>
            <span>/ Posts</span>
          </div>
        </div>
        <div className="flex justify-end mb-4">
          <StyledButton
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => handleOpenDialog("add")}
          >
            Add Post
          </StyledButton>
        </div>
        <div className="overflow-x-auto">
          <TableContainer
            component={Paper}
            sx={{ backgroundColor: "#2a3042", minWidth: "800px" }}
          >
            <Table aria-label="posts table">
              <TableHead>
                <TableRow>
                  <StyledTableCell sx={{ width: "5%" }}>ID</StyledTableCell>
                  <StyledTableCell sx={{ width: "20%" }}>Title</StyledTableCell>
                  <StyledTableCell sx={{ width: "45%" }}>Body</StyledTableCell>
                  <StyledTableCell sx={{ width: "10%" }} align="right">
                    User ID
                  </StyledTableCell>
                  <StyledTableCell sx={{ width: "10%" }} align="right">
                    Reactions
                  </StyledTableCell>
                  <StyledTableCell sx={{ width: "10%" }} align="right">
                    Actions
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedPosts.map((post) => (
                  <StyledTableRow key={post.id}>
                    <StyledTableCell component="th" scope="row">
                      {post.id}
                    </StyledTableCell>
                    <StyledTableCell>{post.title}</StyledTableCell>
                    <StyledTableCell>
                      {expandedRows[post.id]
                        ? post.body
                        : truncateText(post.body, 20)}
                      {post.body.split(" ").length > 20 && (
                        <Button
                          size="small"
                          onClick={() => handleToggleExpand(post.id)}
                          sx={{
                            textTransform: "none",
                            color: "#60a5fa",
                            fontSize: "0.75rem",
                            "&:hover": {
                              backgroundColor: "transparent",
                              color: "#93c5fd",
                            },
                            whiteSpace: "nowrap",
                          }}
                        >
                          {expandedRows[post.id] ? "Thu gọn" : "Xem thêm"}
                        </Button>
                      )}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {post.userId}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {post.reactions?.likes || 0}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <div className="flex justify-end gap-1">
                        <IconButton
                          size="small"
                          onClick={() => handleOpenDialog("edit", post)}
                          sx={{ color: "#60a5fa" }}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handleOpenDeleteDialog(post.id)}
                          sx={{ color: "#ef4444" }}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <StyledTablePagination
          component="div"
          count={posts.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25, 50]}
          labelDisplayedRows={({ to, count }) =>
            `Showing ${Math.min(to, count)} of ${count} results`
          }
          labelRowsPerPage="Rows per page:"
        />
      </div>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: "#2a3042",
            borderRadius: "0.5rem",
            margin: { xs: "16px", sm: "32px" },
            maxWidth: { xs: "calc(100% - 32px)", sm: "600px" },
            maxHeight: "80vh",
            overflowY: "auto",
          },
        }}
      >
        <DialogTitle
          sx={{ color: "#ffffff", fontSize: { xs: "1rem", sm: "1.125rem" } }}
        >
          {dialogMode === "add" ? "Thêm bài viết" : "Sửa bài viết"}
        </DialogTitle>
        <DialogContent sx={{ padding: { xs: "16px", sm: "24px" } }}>
          <StyledTextField
            margin="dense"
            label="Title"
            name="title"
            value={currentPost.title}
            onChange={handleInputChange}
            fullWidth
            error={!!formErrors.title}
            helperText={formErrors.title}
          />
          <StyledTextField
            margin="dense"
            label="Body"
            name="body"
            value={currentPost.body}
            onChange={handleInputChange}
            fullWidth
            multiline
            rows={4}
            error={!!formErrors.body}
            helperText={formErrors.body}
          />
          <StyledTextField
            margin="dense"
            label="User ID"
            name="userId"
            type="number"
            value={currentPost.userId}
            onChange={handleInputChange}
            fullWidth
            error={!!formErrors.userId}
            helperText={formErrors.userId}
          />
        </DialogContent>
        <DialogActions
          sx={{
            padding: { xs: "12px 16px", sm: "16px" },
            borderTop: "1px solid #4a5568",
            justifyContent: "flex-end",
            gap: "8px",
          }}
        >
          <Button
            onClick={handleCloseDialog}
            sx={{
              color: "#ffffff",
              backgroundColor: "#4a5568",
              fontSize: { xs: "0.8rem", sm: "0.875rem" },
              borderRadius: "0.25rem",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#6b7280",
              },
            }}
          >
            Hủy
          </Button>
          <StyledButton onClick={handleSubmit} variant="contained">
            {dialogMode === "add" ? "Thêm" : "Lưu"}
          </StyledButton>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: "#2a3042",
            borderRadius: "0.5rem",
            margin: { xs: "16px", sm: "32px" },
            maxWidth: { xs: "calc(100% - 32px)", sm: "400px" },
            maxHeight: "80vh",
          },
        }}
      >
        <DialogTitle
          sx={{ color: "#ffffff", fontSize: { xs: "1rem", sm: "1.125rem" } }}
        >
          Xác nhận xóa
        </DialogTitle>
        <DialogContent sx={{ padding: { xs: "16px", sm: "24px" } }}>
          <DialogContentText
            sx={{
              color: "#a6b0cf",
              fontSize: { xs: "0.8rem", sm: "0.875rem" },
            }}
          >
            Bạn có chắc chắn muốn xóa bài viết này không?
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            padding: { xs: "12px 16px", sm: "16px" },
            borderTop: "1px solid #4a5568",
            justifyContent: "flex-end",
            gap: "8px",
          }}
        >
          <Button
            onClick={handleCloseDeleteDialog}
            sx={{
              color: "#ffffff",
              backgroundColor: "#4a5568",
              fontSize: { xs: "0.8rem", sm: "0.875rem" },
              padding: { xs: "6px 12px", sm: "8px 16px" },
              borderRadius: "0.25rem",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#6b7280",
              },
            }}
          >
            Hủy
          </Button>
          <Button
            onClick={handleDelete}
            sx={{
              backgroundColor: "#ef4444",
              color: "#ffffff",
              fontSize: { xs: "0.8rem", sm: "0.875rem" },
              padding: { xs: "6px 12px", sm: "8px 16px" },
              borderRadius: "0.25rem",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#dc2626",
              },
            }}
          >
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>

      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default Post;
