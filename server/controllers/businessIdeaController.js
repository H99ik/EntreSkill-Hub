import BusinessIdea from "../models/BusinessIdea.js";

// @desc    Get all business ideas
// @route   GET /api/business-ideas
// @access  Public
export const getBusinessIdeas = async (req, res) => {
  try {
    const ideas = await BusinessIdea.find({ isActive: true });

    res.status(200).json({
      success: true,
      count: ideas.length,
      data: ideas,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get Business Idea by ID
// @route   GET /api/business-ideas/:id
// @access  Public
export const getBusinessIdeaById = async (req, res) => {
  try {
    const idea = await BusinessIdea.findById(req.params.id);

    if (!idea) {
      return res.status(404).json({
        success: false,
        message: "Business Idea not found",
      });
    }

    res.status(200).json({
      success: true,
      data: idea,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Create new business idea
// @route   POST /api/business-ideas
// @access  Admin
export const createBusinessIdea = async (req, res) => {
  try {
    const idea = await BusinessIdea.create(req.body);

    res.status(201).json({
      success: true,
      message: "Business Idea created successfully",
      data: idea,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Update business idea
// @route   PUT /api/business-ideas/:id
// @access  Admin
export const updateBusinessIdea = async (req, res) => {
  try {
    const idea = await BusinessIdea.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!idea) {
      return res.status(404).json({
        success: false,
        message: "Business Idea not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Business Idea updated successfully",
      data: idea,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Delete business idea (Soft Delete)
// @route   DELETE /api/business-ideas/:id
// @access  Admin
export const deleteBusinessIdea = async (req, res) => {
  try {
    const idea = await BusinessIdea.findById(req.params.id);

    if (!idea) {
      return res.status(404).json({
        success: false,
        message: "Business Idea not found",
      });
    }

    idea.isActive = false;
    await idea.save();

    res.status(200).json({
      success: true,
      message: "Business Idea deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
