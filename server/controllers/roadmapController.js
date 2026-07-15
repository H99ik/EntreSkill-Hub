import Roadmap from "../models/Roadmap.js";

// @desc    Get all roadmaps
// @route   GET /api/roadmaps
// @access  Public
export const getRoadmaps = async (req, res) => {
  try {
    const roadmaps = await Roadmap.find()
      .populate("entrepreneur", "name email")
      .populate("mentor", "name");

    res.status(200).json({
      success: true,
      count: roadmaps.length,
      data: roadmaps,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get roadmap by ID
// @route   GET /api/roadmaps/:id
// @access  Public
export const getRoadmapById = async (req, res) => {
  try {
    const roadmap = await Roadmap.findById(req.params.id)
      .populate("entrepreneur", "name email")
      .populate("mentor", "name");

    if (!roadmap) {
      return res.status(404).json({
        success: false,
        message: "Roadmap not found",
      });
    }

    res.status(200).json({
      success: true,
      data: roadmap,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Create roadmap
// @route   POST /api/roadmaps
// @access  Admin / Mentor
export const createRoadmap = async (req, res) => {
  try {
    const roadmap = await Roadmap.create(req.body);

    res.status(201).json({
      success: true,
      message: "Roadmap created successfully",
      data: roadmap,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Update roadmap
// @route   PUT /api/roadmaps/:id
// @access  Admin / Mentor
export const updateRoadmap = async (req, res) => {
  try {
    const roadmap = await Roadmap.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!roadmap) {
      return res.status(404).json({
        success: false,
        message: "Roadmap not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Roadmap updated successfully",
      data: roadmap,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Delete roadmap
// @route   DELETE /api/roadmaps/:id
// @access  Admin
export const deleteRoadmap = async (req, res) => {
  try {
    const roadmap = await Roadmap.findById(req.params.id);

    if (!roadmap) {
      return res.status(404).json({
        success: false,
        message: "Roadmap not found",
      });
    }

    await roadmap.deleteOne();

    res.status(200).json({
      success: true,
      message: "Roadmap deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get roadmap by Entrepreneur ID
// @route   GET /api/roadmaps/entrepreneur/:id
// @access  Public
export const getRoadmapByEntrepreneur = async (req, res) => {
  try {
    const roadmap = await Roadmap.findOne({
      entrepreneur: req.params.id,
    })
      .populate("entrepreneur", "name email")
      .populate("mentor", "name");

    if (!roadmap) {
      return res.status(404).json({
        success: false,
        message: "Roadmap not found",
      });
    }

    res.status(200).json({
      success: true,
      data: roadmap,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
